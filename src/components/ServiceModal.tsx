// components/ServiceModal.tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    icon: React.ReactNode;
    longDescription: string;
    rates: {
        weekday: Record<string, number | null> | null;
        weekend: Record<string, number | null> | null;
    };
}

const ServiceModal = ({
                          isOpen,
                          onClose,
                          title,
                          icon,
                          longDescription,
                          rates,
                      }: ServiceModalProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="text-brand-blue-700 bg-brand-blue-100 p-3 rounded-lg">
                                            {icon}
                                        </div>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            {title}
                                        </Dialog.Title>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-gray-700">{longDescription}</p>

                                    <div>
                                        <h4 className="text-sm font-semibold mb-1">Rates:</h4>
                                        <div className="overflow-x-auto border rounded">
                                            <table className="min-w-full text-sm">
                                                <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="px-3 py-2 text-left">Time Slot</th>
                                                    <th className="px-3 py-2 text-left">Weekday</th>
                                                    <th className="px-3 py-2 text-left">Weekend</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {["07-19", "19-24", "00-07"].map((slot) => (
                                                    <tr key={slot} className="border-t">
                                                        <td className="px-3 py-2">{slot}</td>
                                                        <td className="px-3 py-2">
                                                            {rates.weekday?.[slot] != null
                                                                ? `€${rates.weekday[slot]}`
                                                                : "N/A"}
                                                        </td>
                                                        <td className="px-3 py-2">
                                                            {rates.weekend?.[slot] != null
                                                                ? `€${rates.weekend[slot]}`
                                                                : "N/A"}
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <p className="text-xs text-gray-500 mt-2">
                                        <strong>Note:</strong> Bank holidays and Christmas/New Year are subject to bespoke rates and may incur a premium.
                                    </p>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ServiceModal;
