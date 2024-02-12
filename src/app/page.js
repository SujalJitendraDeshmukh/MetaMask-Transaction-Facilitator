import {Button} from "@mui/material";

export default function Home() {
  return (
      <div>
          <h1>Hey this is the heading</h1>
          <form>
            <input type={"text"} placeholder={"Enter Sender's Address"}/>
            <input type={"text"} placeholder={"Enter Reciever's Address"}/>
            <input type={"number"} placeholder={"Enter the Amount"}/>
              <Button variant="text">Transfer</Button>
          </form>
      </div>
  );
}
