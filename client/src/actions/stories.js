import * as api from '../api';
import {
    FETCH_ALL_STORIES, 
    CREATE_STORY, 
    UPDATE_STORY, 
    DELETE_STORY
} from "../constants/actionTypes";

export const getStories = () => async (dispatch) => {

    try {
        const { data } = await api.fetchStories();
        dispatch({type: FETCH_ALL_STORIES, payload: data});
    } catch (error) {
        console.log(`Error during FETCH_ALL_STORIES action ${error.message}`);
    }

};

export const createStory = (story) => async (dispatch) => {

    try {
        const { data } = await api.createStory(story);
        console.log(data);
        dispatch({type: CREATE_STORY, payload: data});
    } catch (error) {
        console.log(`Error during CREATE_STORY action: ${error.message}`);
    }
    
};

export const updateStory = (id, story) => async (dispatch) => {

    try {
        const { data } = await api.updateStory(id, story);
        console.log(data);
        dispatch({type: UPDATE_STORY, payload: data});
    } catch (error) {
        console.log(`Error during UPDATE_STORY action: ${error.message}`);
    }
    
};

export const deleteStory = (id) => async (dispatch) => {

    try {
        await api.deleteStory(id);
        dispatch({type: DELETE_STORY, payload: id});
    } catch (error) {
        console.log(`Error during DELETE_STORY action: ${error.message}`);
    }
    
};

export const likeStory = (id) => async (dispatch) => {

    try {
        const { data } = await api.likeStory(id);
        console.log(data);
        dispatch({type: UPDATE_STORY, payload: data});
    } catch (error) {
        console.log(`Error during LIKE_STORY action: ${error.message}`);
    }
    
};