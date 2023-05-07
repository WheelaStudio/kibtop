import VerifiedAccFlag from "../../../ChatComponents/ChatStatuses/VerifiedAccFlag";

function UsernameComponent({username, isVerified, online}) {
    return (
        <div className="dialog-username">
            <div className="dialog-title__username">{ username }{ isVerified ? <VerifiedAccFlag/> : <span></span> }</div>
            <p className="online-text" style={!online ? {color: 'transparent'} : {}}>{ online ? 'online' : 'offline'}</p>
        </div>
    );
}

export default UsernameComponent;