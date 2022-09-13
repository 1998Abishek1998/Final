import {
  LOADING_BEGIN,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_POST_BEGIN,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  GET_POSTS_BEGIN,
  GET_POSTS_SUCCESS,
  GET_LIKEPOSTS_BEGIN,
  GET_LIKEPOSTS_SUCCESS,
  POSTS_DETAIL_BEGIN,
  POSTS_BEGIN_SUCCESS,
  POSTS_UPDATE_SUCCESS,
  POSTS_DELETE_BEGIN,
  GET_PROFILE_BEGIN,
  FOLLOW_BEGIN,
  FOLLOW_SUCCESS,
  SEARCH_SUCCESS,
  COMMENT_BEGIN,
  COMMENT_SUCCESS,
  COMMENT_ERROR,
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
  DELETE_COMMENT_BEGIN,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  COMPANY_ADD_REQUEST,
  COMPANY_ADD_SUCCESS,
  COMPANY_ADD_ERROR,
  GET_ALLCOMPANY_REQUEST,
  GET_ALLCOMPANY_SUCCESS,
  GET_ALLCOMPANY_ERROR
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === LOADING_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertType: "", alertText: "" };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,

      userLocation: "",
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
    };
    return { ...state, ...initialState };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,

      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,

      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === CREATE_POST_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_POST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      isSubmit: action.payload.isSubmit,
      alertType: "success",
      alertText: "New POST Created!",
    };
  }
  if (action.type === CREATE_POST_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_POSTS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_POSTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isSubmit: false,
      userfeed: action.payload.userfeed,
    };
  }

  if (action.type === GET_LIKEPOSTS_BEGIN) {
    return { ...state, likeAnimation: true };
  }
  if (action.type === GET_LIKEPOSTS_SUCCESS) {
    return { ...state, likeAnimation: false };
  }

  if (action.type === POSTS_DETAIL_BEGIN) {
    return {
      ...state,
      postInfo: action.payload.post,
      ImageToEdit: action.payload.post.images,
    };
  }

  if (action.type === POSTS_BEGIN_SUCCESS) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === POSTS_UPDATE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "POST UPDATE SUCCESS",
      isEditing: action.payload.isEditing,
    };
  }

  if (action.type === POSTS_DELETE_BEGIN) {
    return {
      ...state,
      isDeleting: action.payload.isDeleting,
    };
  }

  if (action.type === GET_PROFILE_BEGIN) {
    return {
      ...state,
      profileUser: action.payload.user,
      profilePost: action.payload.post,
      followings: action.payload.followings,
      followers: action.payload.followers,
      isLoading: false,
    };
  }
  if (action.type === FOLLOW_BEGIN) {
    return {
      ...state,
      buttontype: true,
    };
  }
  if (action.type === FOLLOW_SUCCESS) {
    return {
      ...state,
      buttontype: false,
    };
  }

  if (action.type === SEARCH_SUCCESS) {
    return {
      ...state,
      searchList: action.payload.users,
    };
  }

  if (action.type === COMMENT_BEGIN) {
    return {
      ...state,
      buttontype: true,
    };
  }
  if (action.type === COMMENT_SUCCESS) {
    return {
      ...state,
      buttontype: false,
    };
  }
  if (action.type === COMMENT_ERROR) {
    return {
      ...state,
      buttontype: false,
    };
  }

  if (action.type === GET_COMMENTS_BEGIN) {
    return {
      ...state,
      buttontype: true,
    };
  }
  if (action.type === GET_COMMENTS_SUCCESS) {
    return {
      ...state,
      buttontype: false,
      commentsList: action.payload.comments,
    };
  }
  if (action.type === GET_COMMENTS_ERROR) {
    return {
      ...state,
      buttontype: false,
    };
  }
  if (action.type === DELETE_COMMENT_BEGIN) {
    return {
      ...state,
      buttontype: true,
    };
  }
  if (action.type === DELETE_COMMENT_SUCCESS) {
    return {
      ...state,
      buttontype: false,
    
    };
  }
  if (action.type === DELETE_COMMENT_ERROR) {
    return {
      ...state,
      buttontype: false,
    };
  }

  if (action.type === COMPANY_ADD_REQUEST) {
    return { ...state, isLoading: true };
  }
  if (action.type === COMPANY_ADD_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }

  if (action.type === COMPANY_ADD_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.message,
    };
  }

  if (action.type === GET_ALLCOMPANY_REQUEST) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_ALLCOMPANY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      alertType: "success",
      company: action.payload.company
    };
  }

  if (action.type === GET_ALLCOMPANY_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertType: "danger",
    };
  }
  

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
