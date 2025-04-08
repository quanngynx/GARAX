export const toast = ({
    title,
    description,
    status,
    isClosable,
} : {
    title: string,
    description: unknown,
    status: string,
    isClosable: boolean,
}) => {
    return {
        title,
        description,
        status,
        isClosable,
    }
}