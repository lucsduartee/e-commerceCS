

export function ItemCardBig(props){
    return(
        <ContainerContentBig>
            <ContainerImgBig>
                <img src={props.image}/>
            </ContainerImgBig>
            <ContainerInfosBig>
                <h4 src={props.text}></h4>
            </ContainerInfosBig>
        </ContainerContentBig>
    );
}

export function ItemCardMedium(){
    return(

    );
}

const ContainerContentBig = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    height: 20vh;
`;
const ContainerImgBig = styled.div`
    width: 100%%;
    height: 75%;
`;
const ContainerInfosBig = styled.div`
    background-color: #111;
    width: 100%;
    height: 25%;
`;

const ContainerImgMedium = styled.div`
    width: 30%;
    height: 15vh;
`;
const ContainerInfosBig = styled.div`
    background-color: #111;
    height: 4vh;
    width: 30%;
`;

const ContainerImgBig = styled.div`
    width: 20%;
    height: 15vh;
`;
const ContainerInfosBig = styled.div`
    background-color: #111;
    height: 4vh;
    width: 20%;
`;