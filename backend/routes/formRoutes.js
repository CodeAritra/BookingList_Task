import express from 'express';
import { createForm, getForms, updateForm, deleteForm } from '../controllers/formController.js';

const router = express.Router();

router.route('/')
  .get(getForms)
  .post(createForm);

router.route('/:id')
  .put(updateForm)
  .delete(deleteForm);

export default router;
