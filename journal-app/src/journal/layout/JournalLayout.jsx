import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar";

const drawerWidth = 240;


export const JournalLayout = ( { children } ) => {
  return (
    <Box sx={ { display: 'flex' } }>
        {/* Navvbar */}
        <NavBar drawerWidth= { drawerWidth }/>

        {/* Sidebar */}

        <Box
            component='main'
            sx={ { flexGrow: 1, p: 3 } }
        >
            {/* Toolbar */}

            { children }
        </Box>
    </Box>
  )
}
