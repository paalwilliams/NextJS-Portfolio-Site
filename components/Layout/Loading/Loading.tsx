import React from 'react'
import Loader from 'react-loaders'

interface ILoadingProps {
    active: boolean;
}
const Loading = (props: ILoadingProps) => {
    const { active } = props
    return (
        <Loader type="cube-transition" active={active} />
    )
}

export default Loading;