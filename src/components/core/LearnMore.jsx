function LearnMore(prop) {
    return (
        <div className="learn-arrow">
            <div className="learn">LEARN MORE</div>
            <div className="arrow">🢓</div>
            {prop.children && prop.children}
        </div>
    )
}

export default LearnMore