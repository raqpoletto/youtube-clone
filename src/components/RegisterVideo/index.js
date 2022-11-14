import React from "react";
import { StyledRegisterVideo } from "./styles";

// Whiteboarding
// Custom Hook

function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (evento) => {
      const value = evento.target.value;
      const name = evento.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: " ", url: " " },
  });
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setIsModalOpen(true)}>
        +
      </button>
      {isModalOpen ? (
        <form
          onSubmit={(evento) => {
            evento.preventDefault();

            setIsModalOpen(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>
            <input
              placeholder="Video title"
              name="title"
              value={formCadastro.values.title}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="Video URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Register</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
