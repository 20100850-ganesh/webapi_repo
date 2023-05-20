import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository';
import AccountsRepositoryMongo from '../accounts/repositories/MongoAccountRepository';
import AccountSchema from '../accounts/validators';


const buildDependencies = () => {
    const dependencies = {
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
