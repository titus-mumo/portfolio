export const Skill = ({ skill, color }) => {
    console.log(color);
    const textColor = 'black';
    return (
        <div>
            <p 
            className= "text-white text-base m-2 py-1 px-1.5 rounded-xl font-"
            style={{background: color}}
            >{skill}</p>
        </div>
    );
};