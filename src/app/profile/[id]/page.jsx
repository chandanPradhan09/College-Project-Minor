export default function UserProfile({ params }) {
    return (
        <div>
            <h1>Profile</h1>
            <p className="text-4xl">{params.id}</p>
        </div>
    );
}
