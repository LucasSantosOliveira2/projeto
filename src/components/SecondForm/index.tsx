import * as S from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SecondFormProps = {
  switchToProjectForm: () => void;
  numParticipants: number;
  tasksNames: string[];
  currentTaskIndex: number;
  switchToNextForm: () => void;
};

const SchemaForm = z.object({
  description: z.object({
    participantAnalysis: z.record(z.string().min(1, "Informe sua opinião")),
  }),
  option: z.object({
    sentenca: z.boolean(),
  }),
});

export type SecondFormValues = z.infer<typeof SchemaForm>;

interface CombinedFormData {
  secondForm: SecondFormValues;
  projectFormData: FormProps;
}

const dataArray: CombinedFormData[] = [];

export const SecondForm = (
  props: SecondFormProps & { projectFormData: FormProps }
) => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SecondFormValues>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(SchemaForm),
    defaultValues: {
      description: {
        participantAnalysis: {},
      },
      option: {
        sentenca: false,
      },
    },
  });

  const handleFormSubmit = async (data: SecondFormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 10));
      dataArray.push({
        secondForm: data,
        projectFormData: props.projectFormData,
      });

      const projectForm = props.projectFormData;
      const idProjeto = (projectForm as any).information.id;

      const userInfoString = window.localStorage.getItem("userInfo");

      const userEmail =
        userInfoString !== null ? JSON.parse(userInfoString).email : null;

      if (props.currentTaskIndex === props.tasksNames.length - 1) {
        if (idProjeto == 0) {
          toast.info("⏳ Analisando...", {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            style: {
              background: "#7551FF",
              color: "#ffffff",
            },
          });
          toast.info(
            "Você será redirecionado para a página de projetos em breve...",
            {
              position: "top-right",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "colored",
              style: {
                background: "#7551FF",
                color: "#ffffff",
              },
            }
          );

          fetch(`${process.env.BACK_URL}/project/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              dataArray: dataArray,
              email: userEmail,
            }),
          })
            .then(() => {
              navigate("/project");
              window.location.reload();
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          toast.info("⏳ Atualizando e Analisando...", {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            style: {
              background: "#7551FF",
              color: "#ffffff",
            },
          });
          toast.info(
            "Você será redirecionado para a página de projetos em breve...",
            {
              position: "top-right",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "colored",
              style: {
                background: "#7551FF",
                color: "#ffffff",
              },
            }
          );
          fetch(`${process.env.BACK_URL}/project/update`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              dataArray: dataArray,
              email: userEmail,
            }),
          })
            .then(() => {
              navigate("/project");
              window.location.reload();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        props.switchToNextForm();
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
      <S.FormContainer>
        <S.Title>{props.tasksNames[props.currentTaskIndex]}</S.Title>
        {Array.from({ length: props.numParticipants }, (_, index) => (
          <S.FieldContainer key={index}>
            <S.Label>Participante {index + 1}</S.Label>
            <S.TextArea
              placeholder={`Opinião do participante ${index + 1}`}
              {...register(
                `description.participantAnalysis.${index}` as const,
                {
                  required: "Informe sua opinião",
                }
              )}
            />
            {errors.description?.participantAnalysis?.[index]?.message && (
              <S.Error>
                {errors.description?.participantAnalysis?.[index]?.message}
              </S.Error>
            )}
            {/* <Checkbox checkboxType="option.sentenca" checkboxName="Sentença" register={register} />                     */}
          </S.FieldContainer>
        ))}
        <S.ButtonContainer>
          <S.ButtonSave onClick={props.switchToProjectForm}>
            Voltar
          </S.ButtonSave>
          <S.ButtonSave type="submit">
            {props.currentTaskIndex === props.tasksNames.length - 1
              ? "Finalizar"
              : "Continuar"}
          </S.ButtonSave>
        </S.ButtonContainer>
      </S.FormContainer>
      <ToastContainer />
    </S.Form>
  );
};
