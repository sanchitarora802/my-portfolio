"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useTheme } from "styled-components";
import StyledDiv from "./StyledDiv";
import StyledText from "./StyledText";
import StyledButton from "./StyledButton";
import StyledInput from "./StyledInput";
import { StyledTextArea } from "./StyledTextArea";
import { Line } from "@rc-component/progress";

const ContactForm = ({}) => {
  const theme = useTheme();
  const [error, setError] = useState(false);
  const [progressDetails, setProgressDetails] = useState({
    step: 1,
    progress: 25,
  });
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contactDetails.name,
        email: contactDetails.email,
        message: contactDetails.message,
      }),
    });

    if (response.ok) {
      setLoading(false);
      setError(false);
      setContactDetails({ name: "", email: "", message: "" });
      setProgressDetails({ ...progressDetails, step: 4, progress: 100 });
    } else {
      setLoading(false);
      setError(true);
      setProgressDetails({ ...progressDetails, step: 3, progress: 75 });
    }
  };

  return (
    <StyledDiv
      $background={"#D9D7D7"}
      $border={`1px solid ${theme.colors.border.normal}`}
      $borderRadius="1rem"
      $padding={"2rem"}
      $minWidth={"50%"}
      $textAlign="center"
    >
      <StyledDiv
        $display={"flex"}
        $justifyContent={progressDetails?.step === 4 ? "center" : "flex-end"}
        $maxHeight={progressDetails?.step === 4 ? "160px" : "80px"}
        $width={"100%"}
      >
        <Line
          percent={progressDetails.progress}
          strokeWidth={1}
          strokeColor="#000000"
        />
      </StyledDiv>

      {progressDetails.step === 1 && (
        <Step1
          setProgressDetails={setProgressDetails}
          setContactDetails={setContactDetails}
          contactDetails={contactDetails}
        />
      )}
      {progressDetails.step === 2 && (
        <Step2
          setProgressDetails={setProgressDetails}
          setContactDetails={setContactDetails}
          contactDetails={contactDetails}
          setApiError={setError}
        />
      )}
      {progressDetails.step === 3 && (
        <Step3
          setProgressDetails={setProgressDetails}
          setContactDetails={setContactDetails}
          contactDetails={contactDetails}
          handleSubmit={handleSubmit}
          error={error}
          setApiError={setError}
          loading={loading}
        />
      )}
      {progressDetails.step === 4 && (
        <>
          <StyledDiv
            $display={"flex"}
            $flexDirection={"column"}
            $gap={"10px"}
            $padding={"2rem 0rem 0.3rem 0rem"}
            $alignItems={"center"}
          >
            <StyledText
              as="label"
              $display="block"
              $fontSize="2rem"
              $fontWeight="600"
              $color={theme.colors.text.textBlack}
            >
              Thank you!
            </StyledText>
            <StyledText
              as="label"
              $display="block"
              $margin="0 0 0.5rem 0"
              $fontSize="1rem"
              $fontWeight="500"
              $color={theme.colors.text.textGrayLight}
            >
              Your message has been sent. I will be in touch soon
            </StyledText>
            <RotateCcw
              cursor={"pointer"}
              onClick={() => {
                setContactDetails((prevState) => {
                  return {
                    ...prevState,
                    name: "",
                    email: "",
                    message: "",
                  };
                });
                setProgressDetails((prevState) => {
                  return {
                    ...prevState,
                    step: 1,
                    progress: 25,
                  };
                });
              }}
            />
          </StyledDiv>
        </>
      )}
    </StyledDiv>
  );
};

export default ContactForm;

const Step1 = ({ setProgressDetails, setContactDetails, contactDetails }) => {
  const theme = useTheme();
  return (
    <StyledDiv
      $padding={"1rem"}
      $display={"flex"}
      $flexDirection={"column"}
      $gap={"20px"}
    >
      <StyledDiv $display={"flex"} $flexDirection={"column"} $gap={"10px"}>
        <StyledText
          as="label"
          htmlFor="message"
          $display="block"
          $fontSize="1.6rem"
          $fontWeight="600"
          $color={theme.colors.text.textBlack}
        >
          {`Let's start with your name.`}
        </StyledText>
        <StyledText
          as="label"
          htmlFor="message"
          $display="block"
          $margin="0 0 0.5rem 0"
          $fontSize="0.875rem"
          $fontWeight="500"
          $color={theme.colors.text.textGrayLight}
        >
          {`It's great to meet you!!`}
        </StyledText>
      </StyledDiv>
      <StyledInput
        $inputColor={theme.colors.text.textBlack}
        $inputBackground={theme.colors.white.default}
        width={"100%"}
        id="name"
        placeholder="Jane Doe"
        value={contactDetails?.name}
        onChange={(e) => {
          const { value } = e.target;
          setContactDetails((prevState) => {
            return {
              ...prevState,
              name: value,
            };
          });
        }}
      />
      <StyledDiv $maxWidth={"50%"}>
        <StyledButton
          as="button"
          type="submit"
          $bgColor={theme.colors.background.mainBackground}
          $border={`1px solid ${theme.colors.white.default}`}
          $color={theme.colors.white.default}
          $padding="0.5rem 1rem"
          $borderRadius="10px"
          $fontWeight="600"
          $fontSize="1rem"
          onClick={() => {
            setProgressDetails((prevState) => {
              return {
                ...prevState,
                step: 2,
                progress: 50,
              };
            });
          }}
          disabled={contactDetails?.name === ""}
        >
          <span>Next</span>
          <ArrowRight />
        </StyledButton>
      </StyledDiv>
    </StyledDiv>
  );
};

const Step2 = ({
  setApiError,
  setProgressDetails,
  setContactDetails,
  contactDetails,
}) => {
  const theme = useTheme();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!emailRegex.test(contactDetails.email)) setError(true);
    else {
      setError(false);
    }
  }, [contactDetails.email]);

  return (
    <StyledDiv
      $padding={"1rem"}
      $display={"flex"}
      $flexDirection={"column"}
      $gap={"20px"}
    >
      <StyledDiv $display={"flex"} $flexDirection={"column"} $gap={"10px"}>
        <StyledText
          as="label"
          htmlFor="message"
          $display="block"
          $fontSize="1.6rem"
          $fontWeight="600"
          $color={theme.colors.text.textGrayLight}
        >
          {`What's your email address, ${contactDetails.name || "Dummy"}`}
        </StyledText>
        <StyledText
          as="label"
          htmlFor="message"
          $display="block"
          $margin="0 0 0.5rem 0"
          $fontSize="0.875rem"
          $fontWeight="500"
          $color={theme.colors.text.textGrayLight}
        >
          I will use this to get back to you.
        </StyledText>
      </StyledDiv>

      <StyledInput
        $inputColor={theme.colors.text.textBlack}
        $inputBackground={theme.colors.white.default}
        $inputBorder={error ? theme.colors.red.default : ""}
        value={contactDetails?.email}
        onChange={(e) => {
          const { value } = e.target;
          setContactDetails((prevState) => {
            return {
              ...prevState,
              email: value,
            };
          });
        }}
        width={"100%"}
        id="email"
        placeholder="JaneDoe@gmail.com"
      />
      {error && (
        <StyledText
          as="label"
          htmlFor="message"
          $display="block"
          $fontSize="0.875rem"
          $fontWeight="500"
          $color={theme.colors.red.default}
        >
          Please enter a valid email
        </StyledText>
      )}

      <StyledDiv $maxWidth={"50%"} $display={"flex"} $gap={"10px"}>
        <StyledButton
          $bgColor={theme.colors.white.default}
          $border={`1px solid ${theme.colors.text.textGrayDark}`}
          $color={theme.colors.text.textGrayDark}
          $padding="0.5rem 1rem"
          $borderRadius="10px"
          $fontWeight="600"
          $fontSize="1rem"
          onClick={() => {
            setApiError(false);
            setProgressDetails((prevState) => {
              return {
                ...prevState,
                step: 1,
                progress: 25,
              };
            });
          }}
        >
          <span>Back</span>
        </StyledButton>

        <StyledButton
          as="button"
          type="submit"
          $bgColor={theme.colors.background.mainBackground}
          $border={`1px solid ${theme.colors.white.default}`}
          $color={theme.colors.white.default}
          $padding="0.5rem 1rem"
          $borderRadius="10px"
          $fontWeight="600"
          $fontSize="1rem"
          onClick={() => {
            setProgressDetails((prevState) => {
              return {
                ...prevState,
                step: 3,
                progress: 75,
              };
            });
          }}
          disabled={contactDetails?.email === "" ? true : error}
        >
          <span>Next</span>
          <ArrowRight />
        </StyledButton>
      </StyledDiv>
    </StyledDiv>
  );
};

const Step3 = ({
  error,
  handleSubmit,
  setProgressDetails,
  setContactDetails,
  contactDetails,
  setApiError,
  loading,
}) => {
  const theme = useTheme();
  return (
    <StyledDiv
      $padding={"1rem"}
      $display={"flex"}
      $flexDirection={"column"}
      $gap={"20px"}
    >
      <StyledDiv $display={"flex"} $flexDirection={"column"} $gap={"10px"}>
        <StyledText
          as="label"
          htmlFor="message"
          $display="block"
          $fontSize="1.6rem"
          $fontWeight="600"
          $color={theme.colors.text.textGrayLight}
        >
          {`How can I help you ? `}
        </StyledText>
        <StyledText
          as="label"
          htmlFor="message"
          $display="block"
          $margin="0 0 0.5rem 0"
          $fontSize="0.875rem"
          $fontWeight="500"
          $color={theme.colors.text.textGrayLight}
        >
          Let me know whats on your mind.
        </StyledText>
      </StyledDiv>

      <StyledDiv $display={"flex"} $flexDirection={"column"} $gap={"10px"}>
        <StyledTextArea
          id={"message"}
          value={contactDetails?.message}
          onChange={(e) => {
            const { value } = e.target;
            setContactDetails((prevState) => {
              return {
                ...prevState,
                message: value,
              };
            });
          }}
          $inputColor={theme.colors.text.textBlack}
          $inputBackground={theme.colors.white.default}
          placeholder="Yourr message here..."
        />
        <StyledText
          $textAlign="right"
          as="label"
          htmlFor="message"
          $display="block"
          $margin="0 0 0.5rem 0"
          $fontSize="0.875rem"
          $fontWeight="500"
          $color={theme.colors.text.textGrayLight}
          $opacity={0.4}
        >
          Min 50 Char and Max 150 Char
        </StyledText>
      </StyledDiv>

      <StyledDiv $maxWidth={"50%"} $display={"flex"} $gap={"10px"}>
        <StyledButton
          $bgColor={theme.colors.white.default}
          $border={`1px solid ${theme.colors.text.textGrayDark}`}
          $color={theme.colors.text.textGrayDark}
          $padding="0.5rem 1rem"
          $borderRadius="10px"
          $fontWeight="600"
          $fontSize="1rem"
          onClick={() => {
            setApiError(false);
            setProgressDetails((prevState) => {
              return {
                ...prevState,
                step: 2,
                progress: 50,
              };
            });
          }}
        >
          <span>Back</span>
        </StyledButton>

        <StyledButton
          as="button"
          type="submit"
          $bgColor={theme.colors.background.mainBackground}
          $border={`1px solid ${theme.colors.white.default}`}
          $color={theme.colors.white.default}
          $padding="0.5rem 1rem"
          $borderRadius="10px"
          $fontWeight="600"
          $fontSize="1rem"
          onClick={(e) => {
            handleSubmit(e);
          }}
          disabled={contactDetails?.message.length < 51 || loading}
        >
          <span>submit</span>
        </StyledButton>
      </StyledDiv>
      {error && (
        <StyledText
          as="label"
          $display="block"
          $margin="0 0 0.5rem 0"
          $fontSize="0.9rem"
          $fontWeight="500"
          $color={theme.colors.red.default}
          $opacity={error ? 1 : 0.4}
        >
          Oops! Something went wrong. Please try again later.
        </StyledText>
      )}
    </StyledDiv>
  );
};
