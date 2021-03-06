import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, MenuItem } from '@material-ui/core';
import FileBase from 'react-file-base64';
// dispatch action from post.js //

import { useDispatch, useSelector } from 'react-redux';

// import IconLabelButtons from '../iconButtons/iconButtons'

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', location: '', selectedFile: '', user: '' });

    // To find the posts will the same ID to be updated with currentID to find a specific post. //
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    // styling classes from the JS files.
    const classes = useStyles();
    // allows dispatch actions // 
    const dispatch = useDispatch();

    // populates the values of the form with a callback and a dependency array // 
    useEffect(() => {
        if (post) {
            console.log(post)
            setPostData(post);
        }
    }, [post])

    // when user hit submit it will send a post request with the data they added // 
    const handleSubmit = (e) => {

        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
            // regardless of if or else we will clear the form and call the clear function at the end //     
        }
        clear();
    }
    //this will grab the username and automatically render it in creator
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const email = user.result.email;
    const name = user.result.name;
    // This function will clear form after submit is click upon editing a post // 
    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', location: '', selectedFile: '', user: '', });
    }

    const tags = [
        {
            value: 'Haunted Place',
            label: 'Haunted Place',
        },
        {
            value: 'Historical Site',
            label: 'Historical Site',
        },
        {
            value: 'Film Location',
            label: 'Film Location',
        },
        {
            value: 'Out in Nature',
            label: 'Out in Nature',
        },
        {
            value: 'Other Fun Place',
            label: 'Other Fun Place',
        },
    ];
    //sets the option to pick user data
    const userEmail = [
        {
            value: email,
            label: email
        }
    ];
    const userName = [
        {
            value: name,
            label: name
        }
    ];


    // Line 59 if current ID of the post exists the string will change to "Editing" otherwise it will say "upload" // 
    return (
        <Paper class={classes.paper}>

            <form autoComplete="off" no noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography varient='h6'>{currentId ? 'Editing' : 'Upload'} Your Discovery!</Typography>

                {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData})}/>

                <Typography name="creator" variant="filled" label="User" fullWidth value={postData.user} onChange={() => setPostData({ ...postData})} /> */}
                <TextField name="select" align='left' variant="filled" label="Select Creator" fullWidth value={postData.userName} onChange={(e) => setPostData({ ...postData, user: e.target.value })} select >

                    {userName.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/> */}

                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

                {/* <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split( ',' ) })}/> */}

                <TextField name="select" align='left' variant="filled" label="Select a tag" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} select >

                    {tags.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField name="select" align='left' variant="filled" label="Select your email" fullWidth value={postData.userEmail} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} select >

                    {userEmail.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField name="location" variant="outlined" label="Location" fullWidth value={postData.location} onChange={(e) => setPostData({ ...postData, location: e.target.value })} />

                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                    <br /><br />
                    <Button className={classes.buttonSubmit} variant="contained" color="default" size="large" type="submit" fullWidth>Submit</Button>

                    <Button style={{ marginBottom: '40px' }} variant="contained" color="primary" size="medium" onClick={clear} fullWidth>Clear Fields</Button>
                </div>
            </form>
        </Paper>
    );
}

export default Form;