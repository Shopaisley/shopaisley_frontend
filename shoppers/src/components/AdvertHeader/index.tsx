import { Flex, Text } from "@chakra-ui/react"
import { useTranslation } from 'react-i18next';


const AdvertHeader = () => {
    const { t, i18n } = useTranslation();

    return (
        <Flex
            color={"#FFFFFF"}
            fontWeight={500}
            align={'center'}
            justifyContent={'space-between'}
            bg={'#3E7CB1'}
            top={0}
            zIndex={10}
        >
            <Text fontSize="sm" m={'1rem'} ml={'2rem'}>
                NGN
            </Text>
            <Text fontSize="sm" mb={2}>
                {t('advertHeader.free')}
            </Text>
            <Text fontSize="sm" textAlign='end' mr={'2rem'} mb={2}>
                {t('advertHeader.contact')}
            </Text>
        </Flex>
    )
}

export default AdvertHeader