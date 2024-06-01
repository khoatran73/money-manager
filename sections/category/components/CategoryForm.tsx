import CustomAlert, { CustomAlertRef } from '@/components/CustomAlert';
import CustomForm from '@/components/forms/CustomForm';
import requestApi from '@/libs/requestApi';
import { CategoryRequestDto } from '@/types/category';
import React, { useRef } from 'react';
import { FieldErrors } from 'react-hook-form';
import { getCategoryFields } from '../configs/CategoryConfig';
import useCategoryImageCombo from '@/hooks/useCategoryImageCombo';

export interface Props {}

// const initState: CategoryRequestDto = {
//     backgroundColor: '#000000',
//     color: '#fff',
//     iconStr: '',
//     index: 0,
//     level: 0,
//     name: '',
//     type: TransactionType.Expense,
// };

// const schema = yup.object().shape({
//     backgroundColor: yup.string().required('Vui lòng chọn màu nền'),
//     color: yup.string().required('Vui lòng chọn màu'),
//     iconStr: yup.string().required('Vui lòng chọn biểu tượng'),
//     name: yup.string().required('Vui lòng nhập tên'),
//     index: yup
//         .number()
//         .positive('Phải lớn hơn 0')
//         .integer('Phải là số nguyên')
//         .required('Vui lòng nhập index'),
//     level: yup
//         .number()
//         .positive('Phải lớn hơn 0')
//         .integer('Phải là số nguyên')
//         .required('Vui lòng nhập cấp'),
// });

// const { handleSubmit, control, formState } = useForm({
//     defaultValues: initState,
//     resolver: yupResolver(schema),
// });

const CategoryForm: React.FC<Props> = (props) => {
    const alertRef = useRef<CustomAlertRef>(null);
    const { data: responseComboImage, isLoading: isLoadingCombo } = useCategoryImageCombo();

    const onSubmit = async (formValues: CategoryRequestDto) => {
        try {
            const response = await requestApi('/api/category/create', 'post', formValues);
            console.log(response);
        } catch (err) {
            console.log('err: ', err);
            alertRef.current?.onOpen('error', 'Có lỗi xảy ra!');
        }
    };

    const onError = (errors: FieldErrors<CategoryRequestDto>) => {
        alertRef.current?.onOpen('error', 'Vui lòng nhập đủ thông tin!');
    };

    if (isLoadingCombo) return <></>;

    return (
        <div>
            <CustomForm
                onSubmit={onSubmit}
                onError={onError}
                fields={getCategoryFields(responseComboImage?.data || [])}
            />
            <CustomAlert ref={alertRef} />
        </div>
    );
};

export default CategoryForm;
