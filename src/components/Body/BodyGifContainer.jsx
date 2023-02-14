import styled from "styled-components"



export const BodyGifContainer = () =>{



    return (
        <>
        <BodyGrid>
        <DivGrid1>
            <ImgGifH src="https://res.cloudinary.com/dfikc23ya/image/upload/v1675888552/cat2_d5cong.gif"/>
        </DivGrid1>

        <DivGrid2>
            <ImgGifL src="https://res.cloudinary.com/dfikc23ya/image/upload/v1675888565/dog_bnvtg6.gif" />
        </DivGrid2>

        <DivGrid3>
            <ImgGifH src="https://res.cloudinary.com/dfikc23ya/image/upload/v1675888559/cat1_l2ktby.gif" />
        </DivGrid3>

        <DivGrid4>
            <ImgGifH src="https://res.cloudinary.com/dfikc23ya/image/upload/v1675888949/dadad_hysvn2.gif" />
        </DivGrid4>

        <DivGrid5>
            <ImgGifH src="https://res.cloudinary.com/dfikc23ya/image/upload/v1675888904/gif3_cccfha.gif" />
        </DivGrid5>
        </BodyGrid>
        </>
    )
}

const BodyGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin: 10px;
    margin-left: -30px;
    height: 500px;
    width: 1500px;
    `
const DivGrid1 = styled.div`
    grid-area: 1/1/3/4;
    background: #364153;
    margin: 10px;
`
const DivGrid2 = styled.div`
    grid-area: 1/4/5/6;
    background: #364153;
    margin: 10px;
`
const DivGrid3 = styled.div`
    grid-area: 3/1/5/4;
    background: #364153;
    margin: 10px;
`
const DivGrid4 = styled.div`
    grid-area: 1 / 6 / 3 / 9;
    background: #364153;
    margin: 10px;
`
const DivGrid5 = styled.div`
    grid-area: 3 / 6 / 5 / 9;
    background: #364153;
    margin: 10px;
`
const ImgGifH = styled.img`
    height: 230px;
    width: 540px;

`
const ImgGifL = styled.img`
    width: 355px;
    height: 480px;

`