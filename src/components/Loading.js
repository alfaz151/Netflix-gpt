const Loading = ({ isLoading }) => {
    
    if(!isLoading) {
        return;
    }
    
    return <>
        <div>Loading...</div>
    </> 
}

export default Loading