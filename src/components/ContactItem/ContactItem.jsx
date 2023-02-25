import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { Button, Item } from './ContactItem.styled';

const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, phone } = data;
  return (
    <>
      <Item key={id}>
        {name}: {phone}
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </Item>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
  }),
};
