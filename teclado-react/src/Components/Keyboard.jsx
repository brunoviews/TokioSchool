import Button from './Button';

const Keyboard = ({ onClick }) => {
    const firstRow = "qwertyuiop".split("");
    const secondRow = "asdfghjkl".split("");
    const thirdRow = "zxcvbnm".split("");
  
    return (
      <div className="keyboard">
        <div className="keyboard-row">
          {firstRow.map((letter) => (
            <Button key={letter} text={letter} onClick={onClick} />
          ))}
        </div>
        <div className="keyboard-row">
          {secondRow.map((letter) => (
            <Button key={letter} text={letter} onClick={onClick} />
          ))}
        </div>
        <div className="keyboard-row">
          {thirdRow.map((letter) => (
            <Button key={letter} text={letter} onClick={onClick} />
          ))}
        </div>
        <div className="keyboard-row">
          <Button text="Espacio" onClick={() => onClick(" ")} />
          <Button text="Borrar" onClick={() => onClick("borrar")} />
        </div>
      </div>
    );
  };
    

export default Keyboard;