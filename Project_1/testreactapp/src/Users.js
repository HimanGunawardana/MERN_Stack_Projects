import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UsersTable";

const users = [
    {
        id: 1,
        name: 'Himan',

    },
    {
        id: 2,
        name: 'Liyanage',
    }
];

const Users = () => {
    return(
        <Box
            sx={{
                width: 'calc(100% - 100px',
                margin: 'auto',
                marginTop: '100px'
            }}
        >
            <UserForm /> 
            <UserTable rows={users}/>
        </Box>    
    );
}
export default Users;