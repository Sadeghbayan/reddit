const MyContext = React.createContext();

export default function App({ children }) {
    const [items, setItems] = React.useState([]);
    return (
        <MyContext.Provider value={{ items, setItems }}>
            {children}
        </MyContext.Provider>
    );
}

export { MyContext };