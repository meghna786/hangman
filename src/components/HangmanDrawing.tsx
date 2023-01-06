const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      border: "10px solid black",
      borderRadius: "100%",
      top: "50px",
      right: "-30px",
      position: "absolute",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      backgroundColor: "black",
      top: "120px",
      right: "0px",
      position: "absolute",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      top: "150px",
      right: "10px",
      position: "absolute",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG= (
      <div
        style={{
          width: "100px",
          height: "10px",
          backgroundColor: "black",
          top: "210px",
          right: "10px",
          position: "absolute",
          rotate: "-60deg",
          transformOrigin: "right top",
        }}
      />
    );
    
    const RIGHT_LEG = (
      <div
        style={{
          width: "100px",
          height: "10px",
          backgroundColor: "black",
          position: "absolute",
          top: "210px",
          right: "-100px",
          rotate: "60deg",
          transformOrigin: "left top",
        }}
      />
    );

const BODY_PARTS=[HEAD,BODY,LEFT_ARM,RIGHT_ARM,LEFT_LEG,RIGHT_LEG];

type HangmanDrawingProps={
  numberOfGuesses: number
}

export const HangmanDrawing = ({numberOfGuesses}:HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      { BODY_PARTS.slice(0,numberOfGuesses) }

      <div
        style={{
          width: "10px",
          height: "50px",
          backgroundColor: "black",
          top: "0px",
          right: "0px",
          position: "absolute",
        }}
      />
      <div
        style={{
          width: "120px",
          height: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "400px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{ width: "250px", height: "10px", backgroundColor: "black" }}
      />
    </div>
  );
};
