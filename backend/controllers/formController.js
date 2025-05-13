import Form from "../models/Form.js";

export const createForm = async (req, res) => {
  try {
    const newForm = await Form.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "Form created successfully", newForm });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getForms = async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.json({ success: true, message: "Form recieved successfully", forms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateForm = async (req, res) => {
  try {
    const updated = await Form.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({success: false, message: "Form not found" });
    res.json({ success: true, message: "Form updated successfully",updated});
  } catch (error) {
    res.status(400).json({success: false, message: error.message });
  }
};

export const deleteForm = async (req, res) => {
  try {
    const deleted = await Form.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false,  message: "Form not found" });
    res.json({ success: true, message: "Form deleted" });
  } catch (error) {
    res.status(400).json({success: false, message: error.message });
  }
};
