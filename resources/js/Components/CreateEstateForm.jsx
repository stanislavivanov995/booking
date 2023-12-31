import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import PrimaryButton from './PrimaryButton';
import InputError from './InputError';
import TextArea from './TextArea';

export default function CreateEstateForm() {

    const { setData, post, errors, processing, recentlySuccessful } = useForm({
        name: '',
        description: '',
        images: []
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('estates.store')); 
    };

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Create Estate</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Show your perfect place 
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    {/* Name */}
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        name="name"
                        onChange={(e) =>
                            setData("name", e.target.value)
                        }
                    />

                    <InputError className="mt-2" message={errors.name} />
                    {/* Name */}

                    {/* Description */}
                    <InputLabel className="mt-4" htmlFor="description" value="Description" />

                    <TextArea
                        className="mt-1 block w-full"
                        name="description"
                        rows="4"
                        placeholder="Enter text here..."
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    {/* Description */}
                    
                    {/* Images */}
                    
                    {/* Images */}
                    

                    <div className="flex items-center mt-6 gap-4">
                        <PrimaryButton disabled={processing}>Create</PrimaryButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                                <p className="font-bold">Esatte Created Successfully!</p>
                            </div>
                        </Transition>
                    </div>

                </div>

            </form>
        </section>
    );
}