import { motion } from "framer-motion";
import React from "react";
import Title from "./Title";
import UserCard from "./UserCard";

const SearchModal = ({ users, setSearch }) => {

  return (
    <motion.div
      initial={{ y: "-50px" }}
      animate={{ y: "0" }}
      exit={{ y: "-50px" }}
      className="search__modal"
    >
      <Title margin="8px 0 10px 10px" size={15} color="#bbbbbb">
        Аккаунты
      </Title>
      {users.map((user, index) => (
        <UserCard key={user._id} index={index} user={user} onClick={() => setSearch('')} component="Link" />
      ))}
    </motion.div>
  );
};

export default SearchModal;
