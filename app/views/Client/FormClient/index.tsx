import { HeaderRoute } from "@app/components/Header/Route";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles-formClient";
import { Masks } from "react-native-mask-input";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CLIENT_SCHEMA } from "@app/services/_yup_schemas";
import { propsStack } from "@app/services/types/routes";
import { ClientInput } from "@app/components/Input/Client";
import { TextError } from "@app/components/Text/Error";
import { Tclient } from "@app/services/types/client";
import { SeparatorForm } from "@app/components/Separator/Form";
import { REGEX_TELEPHONE } from "@app/services/_regex";

export default function FormClient() : JSX.Element{
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<Tclient>({ resolver: yupResolver(CLIENT_SCHEMA) });
    const navigation = useNavigation<propsStack>()


    
    return (
        <View style={{flex:1}}>
            <HeaderRoute />
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={styles.titleForm}>Register</Text>
                        <ClientInput control={control} name="name" label="Name" required />
                        {errors.name && <TextError message={errors.name.message} />}

                        <View style={styles.twoColumns}>
                            <View style={{width:'48%'}}>
                                <ClientInput control={control} mask={Masks.BRL_CPF} name="cpf" label={"CPF"} keyboardType="numeric"/>
                                {errors.cpf && <TextError message={errors.cpf.message} />}
                            </View>
                            <View style={{width:'48%'}}>
                                <ClientInput control={control} required mask={Masks.DATE_MMDDYYYY} name="birth" label={"Birth"} keyboardType="numeric"/>
                                {errors.birth && <TextError message={errors.birth.message} />}
                            </View>
                        </View>

                        <SeparatorForm label="Contact" />
                        
                        <View style={styles.twoColumns}>
                            <View style={{width:'48%'}}>
                                <ClientInput control={control} mask={Masks.BRL_PHONE} name="cell" label={"Cell"} keyboardType="numeric"/>
                                {errors.cell && <TextError message={errors.cell.message} />}
                            </View>
                            <View style={{width:'48%'}}>
                                <ClientInput control={control} mask={REGEX_TELEPHONE} name="telephone" label={"Telephone"} keyboardType="numeric"/>
                                {errors.telephone && <TextError message={errors.telephone.message} />}
                            </View>
                        </View>
                        <ClientInput control={control} required name="email" label="Email" placeholder="example@gmail.com" autoCapitalize="none"/>
                        {errors.email && <TextError message={errors.email.message} />}

                        <SeparatorForm label="characteristics" />
                        
                        <View style={styles.twoColumns}>
                            <View style={{width:'48%'}}>
                                <ClientInput control={control} placeholder="0.00" name="height" label={"Height"} keyboardType="numeric"/>
                                {errors.height && <TextError message={errors.height.message} />}
                            </View>
                            <View style={{width:'48%'}}>
                                <ClientInput control={control} name="weight" label={"Weight"} keyboardType="numeric"/>
                                {errors.weight && <TextError message={errors.weight.message} />}
                            </View>
                        </View> 

                        <ClientInput control={control} name="objective" required label="Objective" />
                        {errors.objective && <TextError message={errors.objective.message} />}

                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
    )
}