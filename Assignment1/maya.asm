%macro	printString	1
	push	rax				; save altered registers
	push	rdi
	push	rsi
	push	rdx
	push	rcx

	mov	rdx, 0
	mov	rdi, %1
%%countLoop:
	cmp	byte [rdi], NULL
	je	%%countLoopDone
	inc	rdi
	inc	rdx
	jmp	%%countLoop
%%countLoopDone:

	mov	rax, SYS_write		; system call for write (SYS_write)
	mov	rdi, STDOUT			; standard output
	mov	rsi, %1				; address of the string
	syscall					; call the kernel

	pop	rcx
	pop	rdx
	pop	rsi
	pop	rdi
	pop	rax
%endmacro

; *****************************************************************************
section	.data

; -----
;  Define standard constants

TRUE		equ	1
FALSE		equ	0

SUCCESS		equ	0			; Successful operation

STDIN		equ	0			; standard input
STDOUT		equ	1			; standard output
STDERR		equ	2			; standard error

SYS_read	equ	0			; system call code for read
SYS_write	equ	1			; system call code for write
SYS_open	equ	2			; system call code for file open
SYS_close	equ	3			; system call code for file close
SYS_fork	equ	57			; system call code for fork
SYS_exit	equ	60			; system call code for terminate
SYS_creat	equ	85			; system call code for file open/create
SYS_time	equ	201			; system call code for get time

LF			equ	10
NULL		equ	0
ESC			equ	27

hello		db	"Hello world"
			db	NULL


; *****************************************************************************

section	.text
global	start
start:

; -----
;  Print hello world message.

	printString	hello

; -----
;  Done, terminate program.

last:
	mov	eax, SYS_exit			; call code for exit (sys_exit)
	mov	ebx, SUCCESS			; exit with SUCCESS (no error)
	syscall

; *****************************************************************************