import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  selectAddNewRestaurantPending,
  selectAddNewRestaurantError,
  selectAddNewRestaurantSuccess,
} from "./selectors";
import {
  addNewRestaurantLoading,
  resetAddNewRestaurantState,
} from "services/restaurantsService/slice";
import AddForm from "./AddForm.js";

import "./NewRestaurantModal.scss";

function AddModal({ isOpen, onClose }) {
  const isPending = useSelector(selectAddNewRestaurantPending);
  const isSuccess = useSelector(selectAddNewRestaurantSuccess);
  const error = useSelector(selectAddNewRestaurantError);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    numero: "",
    batiment: "",
    etage: "",
    autres: "",
  });

  useEffect(() => {
    if (isSuccess) {
      onClose();

      return () => {
        setFormValues({
          // TODO refactor to maybe unmount form component so the form state would be always clear?
          numero: "",
          batiment: "",
          etage: "",
          autres: "",
        });

        dispatch(resetAddNewRestaurantState());
      };
    }
  }, [isSuccess, onClose, dispatch]);

  
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <ReactModal
      className="modal"
      overlayClassName="modal__overlay"
      isOpen={isOpen}
    >
      {isPending && <p> Loading</p>}
      {!isPending && error && <p> Error</p>}
      <AddForm
        handleChange={handleChange}
        formValues={formValues}
        onSubmit={() => dispatch(addNewRestaurantLoading(formValues))}
      />
      <button
        onClick={() => onClose()}
        title="Close modal"
        className="modal__close-btn"
      >
        ✖
      </button>
    </ReactModal>
  );
}

AddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

ReactModal.setAppElement("#root");

export default AddModal;
