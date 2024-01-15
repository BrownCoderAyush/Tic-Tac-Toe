import Card from "../Card/Card";
import "./Grid.css";
function Grid({ noOfCards }) {
    return (
        <div className="grid">
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