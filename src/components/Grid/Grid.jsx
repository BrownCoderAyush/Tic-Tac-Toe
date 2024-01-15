import Card from "../Card/Card";
import "./Grid.css";
function Grid({ noOfCards }) {
    return (
        <div className="grid">
            {Array(noOfCards).fill("").map(
                (element, idx) => { return (<Card key={idx} />) }
            )};
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Grid;