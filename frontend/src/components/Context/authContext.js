import React from "react";

export default React.createContext({
    token: null,
    userId: null,
    tokenEpiration: null,
    login: () => {},
    logout: () => {}
});