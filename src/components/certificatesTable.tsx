import Certificado from "../model/certificates";
import SkeletonTable from "./skeletonTable";

interface Props {
    datos: Certificado[];
}

export default function CertificatesTable({ datos }: Props) {
    if (datos.length === 0) {
        return (
            <SkeletonTable />
        );
    }
    return (
        <div className="max-w-fit h-auto p-4 rounded-3xl shadow-2xl bg-white 
        dark:bg-gray-800 border border-white/50">
            
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">
                            dni
                        </th>
                        <th className="px-6 py-3">
                            estudiante
                        </th>
                        <th className="px-6 py-3">
                            carrera
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((data) => (
                        <tr key={data.dni}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td className="px-6 py-4 dark:text-white">
                                {data.dni}
                            </td>
                            <td className="px-6 py-4 dark:text-white">
                                {data.name}
                            </td>
                            <td className="px-6 py-4 dark:text-white">
                                {data.technicalCareer}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );

}