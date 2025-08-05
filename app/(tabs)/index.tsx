import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardProvider,
} from "react-native-keyboard-controller";

const windowHeight = Dimensions.get("window").height;

export default function HomeScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
    },
  });
  const onSubmit = (data: any) => {
    trigger(undefined, { shouldFocus: true });
  };

  return (
    <>
      <KeyboardProvider>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}
            >
              Form
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <View>
                  <Text style={styles.label}>First name</Text>
                  <TextInput
                    placeholder="First name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    ref={ref}
                  />
                </View>
              )}
              name="firstName"
            />
            {errors.firstName && (
              <Text style={styles.errorText}>This is required.</Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <View>
                  <Text style={styles.label}>Last name</Text>
                  <TextInput
                    placeholder="Last name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    ref={ref}
                  />
                </View>
              )}
              name="lastName"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <View>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    ref={ref}
                  />
                </View>
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.errorText}>This is required.</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <View>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    placeholder="Password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    ref={ref}
                  />
                </View>
              )}
              name="password"
            />
            {errors.password && (
              <Text style={styles.errorText}>This is required.</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <View>
                  <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                  placeholder="Confirm Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                    style={styles.input}
                    ref={ref}
                  />
                </View>
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>This is required.</Text>
            )}

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  placeholder="Phone Number"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  />
                </View>
              )}
              name="phoneNumber"
            />
            {errors.phoneNumber && (
              <Text style={styles.errorText}>This is required.</Text>
            )}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          </View>
        </KeyboardAwareScrollView>
      </KeyboardProvider>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  container: {
    gap: 20,
    minHeight: windowHeight,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  errorText: {
    marginBottom: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 20,
    marginBottom: 30,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
