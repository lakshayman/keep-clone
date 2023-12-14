import ColorIcon from '../../Assets/Note/colorpallete.svg';
import DeleteIcon from '../../Assets/Note/deleteIcon.svg';

export default function Note({ note, index, handleClickOpen, handleDelete, openColorPallete, optionsVisibleArray, handleColorChange }) {
    const colors = ["#ffffff", "#faafa8", "#f39f76", "#fff8b8", "#e2f6d3", "#b4ddd3", "#d4e4ed"];

  return (
    <div className="note" style={{backgroundColor: note.color}} onClick={()=>handleClickOpen(note)}>
      <div className="note-title">{note.title}</div>
      <div className="note-content">
        {note.content.split("\n").map((str) => (
          <div style={{ wordWrap: "break-word" }}>{str}</div>
        ))}
      </div>
      <div className="note-options">
        <img className='icon' alt="color-pallete" src={ColorIcon} onClick={(e)=>openColorPallete(e, index)} />
        <img className='icon' alt="delete-icon" src={DeleteIcon} onClick={(e)=>handleDelete(e, note.id)}/>
      </div>

      {optionsVisibleArray[index] ? <div className='background-options' onClick={(e)=>e.stopPropagation()}>
        {colors.map(color => 
            <div className='circle' style={{backgroundColor: color}} onClick={(e)=>handleColorChange(e, note.id, color)}></div>
        )}
      </div> : null}
    </div>
  );
}
