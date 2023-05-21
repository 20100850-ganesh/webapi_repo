import Account from '../entities/Account';
import Authenticator from '/workspaces/webapi_repo/src/accounts/security/BCryptAuthenticator.js';

export default {
    registerAccount: async (firstName, lastName, email, password, { accountsRepository, authenticator }) => {
        password = await authenticator.encrypt(password);
        const account = new Account(undefined, firstName, lastName, email, password);
        return accountsRepository.persist(account);
    },
    getAccount: (accountId, { accountsRepository }) => {
        return accountsRepository.get(accountId);
    },
    find: ({ accountsRepository }) => {
        return accountsRepository.find();
    },
    findByEmail: (email, { accountsRepository }) => {
        return accountsRepository.getByEmail(email);
    },
    updateAccount: async (id, firstName, lastName, email, password, { accountsRepository, authenticator }) => {
        const encryptedPassword = await authenticator.encrypt(password);
        const account = new Account(id, firstName, lastName, email, encryptedPassword);
        return accountsRepository.merge(account);

    },
    authenticate: async (email, password, { accountsRepository, authenticator, tokenManager }) => {
        const account = await accountsRepository.getByEmail(email);
        const result = await authenticator.compare(password, account.password);
        if (!result) {
            throw new Error('Bad credentials');
        }
        const token = tokenManager.generate({ email: account.email });
        return token;
    },

    getFavourites: async (accountId, { accountsRepository }) => {
        const account = await accountsRepository.get(accountId);
        return account.favourites;
    },
    addFavourite: async (accountId, movieId, { accountsRepository }) => {
        const account = await accountsRepository.get(accountId);

        // Check if the movie already exists in the favorites array
        const existingIndex = account.favourites.findIndex((fav) => fav === movieId);
        if (existingIndex !== -1) {
            throw new Error('Movie already exists in favorites.');
        }

        // Add the movie to the favorites array
        account.favourites.push(movieId);

        return await accountsRepository.merge(account);
    },


};
