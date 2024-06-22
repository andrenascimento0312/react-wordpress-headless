import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import validator, { isEmail } from "validator";

import PageTitle from "../../components/PageTitle/PageTitle";

const Contact = props => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const onSubmit = async (data) => {
		setIsLoading(true);
		try {
			// Simulating a network request
			await new Promise((resolve) => setTimeout(resolve, 2000));
			console.log(data);
			setIsSubmitted(true); // Marcando o formulário como submetido com sucesso
		} catch (error) {
			console.error('Erro ao enviar o formulário:', error);
			// Aqui você pode tratar erros específicos se necessário
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<PageTitle title="Contato" />

			<div className="text-white text-center my-8 font-semibold text-xl">Esse form é só front, não to integrando com nada, ainda...</div>


			<div className="max-w-md mx-auto my-10">
				{isSubmitted && isSubmitSuccessful && (
					<div class="mb-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
						<strong class="font-bold">Boaa!</strong>
						<span class="block sm:inline"> Deu tudo certo, meu nobre!!</span>
						{/* <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
							<svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
						</span> */}
					</div>
				)}

				{isSubmitted && !isSubmitSuccessful && (
					<div class="mb-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
						<strong class="font-bold">Vish...Deu erro</strong>
						<span class="block sm:inline"> </span>
						{/* <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
							<svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
						</span> */}
					</div>
				)}

				<div className="relative z-0 w-full mb-5 group">
					<input
						type="email"
						name="floating_email"
						id="floating_email"
						className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'
							} appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
						placeholder=" "
						{...register('email', { required: true, validate: (value => validator.isEmail(value)) })}

					/>
					{errors?.email?.type === "required" && (
						<p className="text-red-500 text-xs mt-2">Email é obrigatório</p>
					)}
					{errors?.email?.type === "validate" && (
						<p className="text-red-500 text-xs mt-2">Email tem que ser válido, campeão!</p>
					)}
					<label for="floating_email" className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Email</label>
				</div>

				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="floating_first_name"
							id="floating_first_name"
							className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${errors?.name ? 'border-red-500' : 'border-gray-300'} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
							placeholder=" "
							{...register("name", { required: true })}
						/>
						{errors?.name?.type === "required" && (
							<p className="text-red-500 text-xs mt-2">Nome é obrigatório</p>
						)}

						<label for="floating_first_name" className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Nome</label>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="floating_last_name"
							id="floating_last_name"
							className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${errors?.lastName ? 'border-red-500' : 'border-gray-500'} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
							placeholder=" "
							{...register('lastName', { required: true })}
						/>
						{errors?.lastName?.type === "required" && (
							<p className="text-red-500 text-xs mt-2">Sobrenome é obrigatório</p>
						)}
						<label for="floating_last_name" className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Sobrenome</label>
					</div>
				</div>

				<div className="relative z-0 w-full mb-5 group">
					<textarea
						name="floating_textarea"
						rows="6"
						id="floating_textarea"
						className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						{...register('message')}
					/>
					<label for="floating_textarea" className={`absolute text-gray-500 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Mensagem</label>
				</div>

				<button
					className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
					onClick={handleSubmit(onSubmit)}
					disabled={isLoading}
				>
					{isLoading ? 'Processando...' : 'Enviar'}
				</button>
			</div>




		</>
	)
}

export default Contact;