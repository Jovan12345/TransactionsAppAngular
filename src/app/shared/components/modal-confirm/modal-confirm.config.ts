export interface ModalConfig {
    modalTitle: string
    submitButtonLabel?: string
    closeButtonLabel?: string
    onClose?(): Promise<boolean> | boolean
    onSubmit?(): Promise<boolean> | boolean
}