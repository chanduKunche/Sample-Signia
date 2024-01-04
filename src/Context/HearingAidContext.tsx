import { ReactNode ,createContext} from "react";
export type Prop = {
    left: string, 
    right: string,
    changeLeftHearingAid: Function,
    changeRightHearingAid: Function
}

type childrenProp = {
    children: ReactNode| ReactNode[]
}
export const Context = createContext<Prop>({left: "", right: ""});
    



export default function HearingAidContext(props: childrenProp) {
  return (
    <Context.Provider value={{left: "", right: ""}}>

        {props.children}

    </Context.Provider>
  )
}
