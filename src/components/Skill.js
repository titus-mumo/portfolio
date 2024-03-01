export const Skill = ({ skill, color }) => {
    console.log(color);
    const textColor = 'black';
    return (
        <div>
            <p className={`text-${textColor} bg-${color}-400 text-base m-2 p-1.5 border-1 border-rose-500 rounded-lg`}>{skill}</p>
        </div>
    );
};