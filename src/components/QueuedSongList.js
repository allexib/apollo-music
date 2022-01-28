import React from 'react'
import {
    Typography, IconButton, Avatar, useMediaQuery
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import {makeStyles} from '@mui/styles'
import {useMutation} from '@apollo/react-hooks'
import {ADD_OR_REMOVE_FROM_QUEUE} from "../graphql/mutations";

function QueuedSongList({queue}) {
    console.log({queue})
    const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))

    /*  const song = {
          title: 'lune',
          artist: 'moon',
          thumbnail: 'https://avatars.githubusercontent.com/u/75475838?s=400&u=' +
          '2b642fc87e14e3e2a1e5f77621a9c081e9c4f551&v=4'
      }*/

    return greaterThanMd && (
        <div style={{margin: '10px 0'}}>
            <Typography color='textSecondary' variant='button'>
                QUEUE ({queue.length})
            </Typography>
            {queue.map((song, i) => (
                <QueuedSong key={i} song={song}/>
            ))}
        </div>
    )
}

const useStyles = makeStyles({
    avatar: {
        width: 44,
        height: 44
    },
    text: {
        textOverflow: 'elipsis',
        overflow: 'hidden'
    },
    container: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: '50px auto 50px',
        gridGap: 12,
        alignItems: 'center',
        marginTop: 10
    },
    songInfoContainer: {
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    }
})

function QueuedSong({song}) {
    const classes = useStyles()
    const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE,{
        onCompleted: data => {
            localStorage.setItem('queue', JSON.stringify(data.addOrRemoveFromQueue))
        }
    })
    const {thumbnail, artist, title} = song

    function handleAddOrRemoveFromQueue() {
        addOrRemoveFromQueue({
            variables: {input: {...song, __typename: 'Song'}}
        })
    }

    return (
        <div className={classes.container}>
            <Avatar src={thumbnail} alt='song thumbnail' className={classes.avatar}/>
            <div className={classes.songInfoContainer}>
                <Typography variant='subtitle2' className={classes.text}> {title}</Typography>
                <Typography color='textSecondary' variant='body2' className={classes.text}>{artist}</Typography>
            </div>
            <IconButton onClick={handleAddOrRemoveFromQueue}>
                <DeleteIcon color='error'/>
            </IconButton>
        </div>
    )
}

export default QueuedSongList