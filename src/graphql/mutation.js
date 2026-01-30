import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
    }
  }
`;

const AddUser = () => {
  const [createUser] = useMutation(CREATE_USER);

  const handleAdd = () => {
    createUser({
      variables: {
        name: "John",
        email: "john@gmail.com",
      },
    });
  };

  return <button onClick={handleAdd}>Add User</button>;
};
