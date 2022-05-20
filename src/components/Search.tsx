import { Container } from "react-bootstrap";

interface searchCompProps{
    setCity: any
}

const Search = ({setCity}:searchCompProps) => {
  return (
    <Container>
      <form>
        <input type="text" className="form-control" onChange={(e)=>setCity(e.target.value)}/>
        <button type="button" className="btn btn-info">
          How is the weather?
        </button>
      </form>
    </Container>
  );
};
export default Search;
