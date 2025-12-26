import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { searchData } from "../jsonDatas/searchData";
import plants from "../jsonDatas/plants.json";

const Search = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchFormRef = useRef();
  const navigate = useNavigate();

  // combine searchdata + plants
  const pages = [
    ...searchData.map((p) => ({ name: p.name.toLowerCase(), url: p.url })),
    ...plants.map((p) => ({ name: p.name.toLowerCase(), url: `/plant/${p.id}` })),
  ];

  const handleInput = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleClickSuggestion = (name) => {
    const page = pages.find((p) => p.name === name.toLowerCase());
    if (page) navigate(page.url);

    setQuery(""); // clear input
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = pages.find((p) => p.name === query.toLowerCase());
    if (match) navigate(match.url);
    else alert(`No results found for '${query}'`);

    setQuery(""); // clear input
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchFormRef.current &&
        !searchFormRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const filteredSuggestions = pages.filter((p) =>
    p.name.includes(query.toLowerCase())
  );

  return (
    <div ref={searchFormRef} style={{ position: "relative", width: "250px" }}>
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search..."
          value={query}
          onChange={handleInput}
          size="sm"
        />
        <Button type="submit" variant="outline-success" size="sm">
          Search
        </Button>
      </Form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ListGroup
          style={{
            position: "absolute",
            top: "35px",
            width: "100%",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filteredSuggestions.map((s) => (
            <ListGroup.Item
              key={s.name}
              action
              onClick={() => handleClickSuggestion(s.name)}
            >
              {s.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default Search;





// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import ListGroup from "react-bootstrap/ListGroup";

// const Search = ({ plants }) => {
//   const [query, setQuery] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const searchFormRef = useRef();
//   const navigate = useNavigate();

//   const pages = plants.map((p) => ({
//     name: p.name.toLowerCase(),
//     url: `/plant/${p.id}`, // navigate to plant detail page
//   }));

//   const handleInput = (e) => {
//     setQuery(e.target.value);
//     setShowSuggestions(true);
//   };

//   const handleClickSuggestion = (name) => {
//     const page = pages.find((p) => p.name === name.toLowerCase());
//     if (page) navigate(page.url);

//     setQuery(""); // clear the search box
//     setShowSuggestions(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const match = pages.find((p) => p.name === query.toLowerCase());
//     if (match) navigate(match.url);
//     else alert(`No results found for '${query}'`);

//     setQuery(""); // clear the search box
//     setShowSuggestions(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         searchFormRef.current &&
//         !searchFormRef.current.contains(event.target)
//       ) {
//         setShowSuggestions(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const filteredSuggestions = pages.filter((p) =>
//     p.name.includes(query.toLowerCase())
//   );

//   return (
//     <div ref={searchFormRef} style={{ position: "relative", width: "250px" }}>
//       <Form onSubmit={handleSubmit} className="d-flex">
//         <Form.Control
//           type="search"
//           placeholder="Search plants"
//           value={query}
//           onChange={handleInput}
//           size="sm"
//         />
//         <Button type="submit" variant="outline-success" size="sm">
//           Search
//         </Button>
//       </Form>

//       {showSuggestions && filteredSuggestions.length > 0 && (
//         <ListGroup
//           style={{
//             position: "absolute",
//             top: "35px",
//             width: "100%",
//             zIndex: 1000,
//             maxHeight: "200px",
//             overflowY: "auto",
//           }}
//         >
//           {filteredSuggestions.map((s) => (
//             <ListGroup.Item
//               key={s.name}
//               action
//               onClick={() => handleClickSuggestion(s.name)}
//             >
//               {s.name}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       )}
//     </div>
//   );
// };

// export default Search;
