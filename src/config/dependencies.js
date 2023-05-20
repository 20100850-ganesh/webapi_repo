import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository';
import AccountsRepositoryMongo from '../accounts/repositories/MongoAccountRepository';
import AccountSchema from '../accounts/validators';
import Authenticator from '/workspaces/webapi_repo/src/accounts/security/simple/index.js';
import AccountValidators from '/workspaces/webapi_repo/src/accounts/validators/index.js';


const buildDependencies = () => {
    const dependencies = {
        validators: AccountValidators,
        authenticator: new Authenticator()
    };

    console.log('DATABASE_DIALECT:', process.env.DATABASE_DIALECT);

    if (process.env.DATABASE_DIALECT === "in-memory") {
        dependencies.accountsRepository = new AccountsRepositoryInMemory();
    } else if (process.env.DATABASE_DIALECT === "mongo") {
        // throw new Error('Add Mongo Support');
        dependencies.accountsRepository = new AccountsRepositoryMongo();
    } else if (process.env.DATABASE_DIALECT === "mysql") {
        throw new Error('Add MySQL support');
    } else {
        throw new Error('Add DB Support to project');
    }
    dependencies.accountSchema = AccountSchema;
    return dependencies;
};

export default buildDependencies;
