import { useMyRouter } from "@/hooks/useMyRouter";

export function Link({ to, children, ...rest }) {
    const { push } = useMyRouter();

    function handleClick(e) {
        e.preventDefault();
        push(to);
    }

    return (
        <a href={to} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
}