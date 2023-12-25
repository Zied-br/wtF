import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
//import of interface and Api use
/* import Example from '../../helpers/interfaces/exampleInterface';
import { example } from '../../utils/api';

export const exampleAction = createAsyncThunk< Example>( example,
async (xx: Example) => {
  try {
  console.log("this is example",xx)
  } catch (error: any) {
   
  }
}) */

export const show = createAction('sentence/show');
export const hide = createAction('sentence/hide');