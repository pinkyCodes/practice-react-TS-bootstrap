// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBarTest from './components/navbar';
import AddUserForm from './components/add-user-form/add-user-form';
import { UserInput } from './models/user';

const App = (): JSX.Element => {

  const addUserHandler = (userInput: UserInput): void => {
    console.log(userInput);
  };

  return (
    <>
      <AddUserForm onAddUser={addUserHandler} />
    </>
  );
};

export default App;
