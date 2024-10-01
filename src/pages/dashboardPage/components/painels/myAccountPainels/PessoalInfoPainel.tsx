import { useState } from "react";
import UserInterface from "../../../../../interfaces/UserInterface";

const EditInputComponent = ({ value }: { value?: string }) => {
  const [val, setVal] = useState(value);
  return (
    <input
      type="text"
      className="edit-input"
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
      }}
    />
  );
};

const EditableInfo = ({ title, value }: { title: string; value?: string }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="editable-info-wrapper">
      <h4>{title}</h4>
      {isEditing ? (
        <>
          <EditInputComponent value={value} />
          <button
            className="painel-button"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            <img src="/images/read-icon.png" alt="" />
          </button>
          <button
            className="painel-button"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            <img src="/images/cancel-icon.png" alt="" />
          </button>
        </>
      ) : (
        <>
          {value}
          <button
            className="painel-button"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            <img src="/images/pensil-icon.png" alt="" />
          </button>
        </>
      )}
    </div>
  );
};

export function PessoalInfoPainel({
  data,
  isFetching,
}: {
  data: UserInterface | null;
  isFetching: boolean;
}) {
  return (
    !isFetching && (
      <div className="sub-painel">
        <EditableInfo title="Nome de Usuário" value={data?.user.username} />
        <EditableInfo title="Nome Completo" value={"Nome"} />
      </div>
    )
  );
}
