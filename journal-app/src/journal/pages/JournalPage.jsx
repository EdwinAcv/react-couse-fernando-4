import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography > In anim consequat ullamco eu adipisicing reprehenderit occaecat. Sint dolor laborum aliquip in labore eu qui ex. Pariatur veniam sit sunt voluptate nisi tempor laboris voluptate eiusmod et. Consectetur culpa cupidatat qui velit ullamco quis dolore pariatur pariatur in non. Non Lorem nulla amet ex aliqua sunt. Elit et in dolore eu reprehenderit. Enim adipisicing reprehenderit ullamco elit. Deserunt enim et aliquip consequat cupidatat ipsum velit aliqua reprehenderit magna eu. Minim mollit cillum irure aute nostrud sint in excepteur aliqua ut adipisicing in id veniam. Consectetur enim ex anim magna in irure minim in reprehenderit. Est ea Lorem voluptate amet aute ea laborum consequat magna dolore incididunt aute. Cupidatat veniam minim irure consequat minim. Velit mollit id minim duis ex id exercitation amet. Non ad deserunt dolore enim qui. Et nulla cupidatat duis sunt esse officia. Deserunt aliqua exercitation exercitation et dolor fugiat. </Typography> */}
    
      <NothingSelectedView />

      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined />
      </IconButton>
      
    </JournalLayout>
  )
}
